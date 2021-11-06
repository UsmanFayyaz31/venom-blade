class Order < ApplicationRecord
    belongs_to :product
    belongs_to :user

    def remaining_days   
        remaining = 10 - (Date.today - ordered_date.to_date).to_i
        if remaining <= 0
            return 0
        else
            return remaining
        end
    end

    def delivered
        remaining = 10 - (Date.today - ordered_date.to_date).to_i
        if remaining <= 0
            return true
        else
            return false
        end
    end
end
