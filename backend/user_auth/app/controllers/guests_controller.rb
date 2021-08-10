class GuestsController < ApplicationController
    before_action :authorize_guest, except: :create
    before_action :getguest ,except: :create
    def showguest
        render json: @guest, status: :ok
      end
    def create
        @guest = Guest.new(guest_params)
        if @guest.save
          render json: @guest, status: :created
        else
          render json: { errors: @guest.errors.full_messages },
                 status: :unprocessable_entity
        end
      end
    private
    def getguest
        header = request.headers['Authorization']
        header = header.split(' ').last if header
        @decoded = JsonWebToken.decode(header)
       guest_id=@decoded[:guest_id]
        @guest = Guest.find_by_id(guest_id)
        
      end
    def guest_params
        params.permit(
          :name, :username
        )
      end
end
