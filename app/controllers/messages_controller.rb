class MessagesController < ApplicationController
  before_action :set_group
  def set_group
    @group = Group.find(params[:id])
  end


  def index
  end

  def create
  end
end
