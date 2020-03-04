class MessagesController < ApplicationController
  before_action :set_group
  def set_group
    @group = Group.find(params[:group_id])
  end

# resources---------------------------------------------------------------------------
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
  end

# private---------------------------------------------------------------------------
  private
  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

end
