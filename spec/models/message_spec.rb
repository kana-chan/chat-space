require "rails_helper"

RSpec.describe Message, type: :model do
  describe "#create" do
    context "can save" do
      # メッセージあり 画像なし 保存ok---------------------------------------------------------------------------
      it "is valid with a content without any images" do
        message = build(:message, image: "")
        expect(message).to be_valid
      end
      # メッセージなし 画像あり 保存ok---------------------------------------------------------------------------
      it "is valid with a image without any contents" do
        message = build(:message, content: "")
        expect(message).to be_valid
      end
      # メッセージあり 画像あり 保存ok---------------------------------------------------------------------------
      it "is valid with images and contents" do
        message = build(:message)
        expect(message).to be_valid
      end
    end

    context "can not save" do
      # メッセージなし 画像なし 保存ng---------------------------------------------------------------------------
      it "is invalid without images and contents" do
        message = build(:message, content: "", image: "")
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end
      # group_idなし 保存ng---------------------------------------------------------------------------
      it "is invalid without group_id" do
        message = build(:message, group_id:"")
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end
      # user_idなし 保存ng---------------------------------------------------------------------------
      it "is invalid without user_id" do
        message = build(:message, user_id:"")
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end