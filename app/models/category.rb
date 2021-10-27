class Category < ApplicationRecord
    has_many :products, dependent: :destroy

    def display_name
      category_name
    end
end
