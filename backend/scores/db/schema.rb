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

ActiveRecord::Schema.define(version: 2021_08_06_070539) do

  create_table "mcq_answers", force: :cascade do |t|
    t.integer "guest_id"
    t.integer "ques_id"
    t.integer "quiz_id"
    t.string "ques_type"
    t.integer "option_id"
    t.integer "is_correct"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "scores", force: :cascade do |t|
    t.integer "guest_id"
    t.integer "quiz_id"
    t.float "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "guest_quizid"
  end

  create_table "text_answers", force: :cascade do |t|
    t.integer "guest_id"
    t.integer "ques_id"
    t.integer "quiz_id"
    t.string "ques_type"
    t.string "answer"
    t.integer "is_correct"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
