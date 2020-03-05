FactoryBot.define do
  factory :user do
    # 変数---------------------------------------------------------------------------
    password = Faker::Internet.password(min_length: 8)
    # データ---------------------------------------------------------------------------
    name {Faker::Name.last_name}
    email {Faker::Internet.free_email}
    password {password}
    password_confirmation {password}
  end
end