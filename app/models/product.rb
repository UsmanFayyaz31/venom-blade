class Product < ApplicationRecord
    belongs_to :category
    has_many_attached :images

    def display_name
        product_name
    end
end
