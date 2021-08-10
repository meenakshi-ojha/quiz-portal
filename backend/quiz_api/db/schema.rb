# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_03_205314) do

  create_table "mcq_question_answers", force: :cascade do |t|
    t.integer "mcq_question_id", null: false
    t.integer "mcq_question_option_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["mcq_question_id"], name: "index_mcq_question_answers_on_mcq_question_id"
    t.index ["mcq_question_option_id"], name: "index_mcq_question_answers_on_mcq_question_option_id"
  end

  create_table "mcq_question_options", force: :cascade do |t|
    t.integer "mcq_question_id", null: false
    t.string "option"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["mcq_question_id"], name: "index_mcq_question_options_on_mcq_question_id"
  end

  create_table "mcq_questions", force: :cascade do |t|
    t.integer "quiz_id", null: false
    t.string "question"
    t.string "ques_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["quiz_id"], name: "index_mcq_questions_on_quiz_id"
  end

  create_table "quizzes", force: :cascade do |t|
    t.integer "user_id"
    t.string "title"
    t.boolean "open"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "text_question_answers", force: :cascade do |t|
    t.integer "text_question_id", null: false
    t.string "answer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["text_question_id"], name: "index_text_question_answers_on_text_question_id"
  end

  create_table "text_questions", force: :cascade do |t|
    t.integer "quiz_id", null: false
    t.string "question"
    t.string "ques_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["quiz_id"], name: "index_text_questions_on_quiz_id"
  end

  add_foreign_key "mcq_question_answers", "mcq_question_options"
  add_foreign_key "mcq_question_answers", "mcq_questions"
  add_foreign_key "mcq_question_options", "mcq_questions"
  add_foreign_key "mcq_questions", "quizzes"
  add_foreign_key "text_question_answers", "text_questions"
  add_foreign_key "text_questions", "quizzes"
end
