require "rails_helper"

RSpec.describe TextQuestionsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/text_questions").to route_to("text_questions#index")
    end

    it "routes to #show" do
      expect(get: "/text_questions/1").to route_to("text_questions#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/text_questions").to route_to("text_questions#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/text_questions/1").to route_to("text_questions#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/text_questions/1").to route_to("text_questions#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/text_questions/1").to route_to("text_questions#destroy", id: "1")
    end
  end
end
