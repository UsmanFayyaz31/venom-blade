class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      add_foreign_key: category_id
      t.string :product_name
      t.text :product_description
      t.decimal :price

      t.timestamps
    end
  end
end
