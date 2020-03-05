require "rails_helper"

describe MessagesController do
  let(:group) { create(:group) }
  let(:user) { create(:user) }

  describe "#index" do
    context "log in" do
      before do
        login user
        get :index, params:{group_id: group.id}
      end
      # インスタンス変数はあるか---------------------------------------------------------------------------
      it "assigns @message" do
        expect(assigns(:message)).to be_a_new(Message)
      end
      it "assigns @group" do
        expect(assigns(:group)).to eq group
      end
      # ビューにリダイレクトできているか---------------------------------------------------------------------------
      it "renders index" do
        expect(response).to render_template :index
      end
    end

    context "not log in" do
      before do
        get :index, params: { group_id: group.id }
      end
      # ビューにリダイレクトできているか---------------------------------------------------------------------------
      it 'redirects to new_user_session_path' do
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end
end