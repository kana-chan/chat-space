class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presences: true, unless: :image?

  mount_uploader :image, ImageUpLoader
end
