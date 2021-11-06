class AddParamsToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :ordered_date, :datetime
    add_column :orders, :remaining_days, :integar
    add_column :orders, :delivered, :boolean
  end
end
