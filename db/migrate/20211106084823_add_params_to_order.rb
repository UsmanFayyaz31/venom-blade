class AddParamsToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :remaining_days, :integer
    add_column :orders, :delivered, :boolean
    add_column :orders, :quantity, :integer
  end
end
