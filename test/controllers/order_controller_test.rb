require "test_helper"

class OrderControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get order_home_url
    assert_response :success
  end

  test "should get index" do
    get order_index_url
    assert_response :success
  end
end
