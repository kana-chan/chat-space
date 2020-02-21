# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# データベース設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|

### Association
- has_many :messages
- has_many :groups, through: :groups-users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|

### Association
- has_many :messages
- belongs_to :user, through: :groups-users

## groups-usersテーブル
|Column|Type|Options|
|------|----|-------|

### Association
- has_many :groups
- has_many :users
