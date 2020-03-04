class MessagesController < ApplicationController
  before_action :set_group
  def set_group
    @group = Group.find(params[:group_id])
  end

# resources
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
  end
end
