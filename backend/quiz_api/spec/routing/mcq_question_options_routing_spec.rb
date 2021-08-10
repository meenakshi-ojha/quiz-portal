require "rails_helper"

RSpec.describe McqQuestionOptionsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/mcq_question_options").to route_to("mcq_question_options#index")
    end

    it "routes to #show" do
      expect(get: "/mcq_question_options/1").to route_to("mcq_question_options#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/mcq_question_options").to route_to("mcq_question_options#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/mcq_question_options/1").to route_to("mcq_question_options#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/mcq_question_options/1").to route_to("mcq_question_options#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/mcq_question_options/1").to route_to("mcq_question_options#destroy", id: "1")
    end
  end
end
