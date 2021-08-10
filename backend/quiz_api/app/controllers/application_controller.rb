class ApplicationController < ActionController::API
    
    def authorize_request
        if  !request.headers['Authorization'].nil?
            header = request.headers['Authorization']
            header = header.split(' ').last if header
            @current_user = AuthService.new.fetchUser(header)
            if @current_user==nil
                render json: {errors: "wrong token user not found"}, status: :unauthorized
            end
        else
            render json: {errors: "no token"}, status: :unauthorized
        end
    end
    def authorize_guest
        if  !request.headers['Authorization'].nil?
            header = request.headers['Authorization']
            header = header.split(' ').last if header
            @guest = AuthService.new.fetchGuest(header)
            if @guest==nil
                render json: {errors: "wrong token user not found"}, status: :unauthorized
            end
        else
            render json: {errors: "no token"}, status: :unauthorized
        end
    end

end
