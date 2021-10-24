class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product_name
      t.text :product_description
      t.decimal :price

      t.timestamps
    end
  end
end
