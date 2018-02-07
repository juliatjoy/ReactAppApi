class Api::V1::ApplicationController < ActionController
  protect_from_forgery with: :null_session

  skip_before_action :verify_authenticity_token
  acts_as_token_authentication_handler_for User

  private

  def current_user
    # rubocop:disable Rails/DynamicFindBy
    @user ||= User.find_by_authentication_token(request.headers['X-User-Token'])
    # rubocop:enable Rails/DynamicFindBy
  end
end
