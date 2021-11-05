class Product < ApplicationRecord
    belongs_to :category
    has_many_attached :images
    has_many :orders, dependent: :destroy

    def display_name
        product_name
    end
end
