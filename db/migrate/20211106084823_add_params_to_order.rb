class AddParamsToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :remaining_days, :integar
    add_column :orders, :delivered, :boolean
    add_column :orders, :quantity, :integar
  end
end
