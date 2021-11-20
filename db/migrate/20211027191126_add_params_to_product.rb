class AddParamsToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :full_length, :integer
    add_column :products, :blade_length, :integer
    add_column :products, :handle_length, :integer
    add_column :products, :material, :string
    add_column :products, :sheath, :boolean
  end
end
