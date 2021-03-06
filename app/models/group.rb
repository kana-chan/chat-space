class Group < ApplicationRecord
  has_many :users, through: :group_users
  has_many :group_users
  has_many :messages

  validates :name, presence: true, uniqueness: true

  def show_last_message
    last_message = messages.last
    if last_message.present?
      if last_message.content.present?
        last_message.content
      else
        "画像が投稿されました"
      end
    else
      "メッセージはまだありません"
    end
  end
end
