require "rails_helper"

RSpec.describe McqQuestionAnswersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/mcq_question_answers").to route_to("mcq_question_answers#index")
    end

    it "routes to #show" do
      expect(get: "/mcq_question_answers/1").to route_to("mcq_question_answers#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/mcq_question_answers").to route_to("mcq_question_answers#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/mcq_question_answers/1").to route_to("mcq_question_answers#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/mcq_question_answers/1").to route_to("mcq_question_answers#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/mcq_question_answers/1").to route_to("mcq_question_answers#destroy", id: "1")
    end
  end
end
