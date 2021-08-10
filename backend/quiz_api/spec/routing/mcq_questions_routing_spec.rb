require "rails_helper"

RSpec.describe McqQuestionsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/mcq_questions").to route_to("mcq_questions#index")
    end

    it "routes to #show" do
      expect(get: "/mcq_questions/1").to route_to("mcq_questions#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/mcq_questions").to route_to("mcq_questions#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/mcq_questions/1").to route_to("mcq_questions#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/mcq_questions/1").to route_to("mcq_questions#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/mcq_questions/1").to route_to("mcq_questions#destroy", id: "1")
    end
  end
end
