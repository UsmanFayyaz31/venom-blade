# frozen_string_literal: true
ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    div class: "blank_slate_container", id: "dashboard_default_message" do
      span class: "blank_slate" do
        span I18n.t("active_admin.dashboard_welcome.welcome")
        small I18n.t("active_admin.dashboard_welcome.call_to_action")
      end
    end
  end
end

ActiveAdmin.register Product do
  permit_params :product_name, :product_description, :price, :category_id, images: []

  form do |f|
    f.inputs do
      f.input :category_id, as: :select, collection: Category.select(:category_name, :id).uniq
      f.input :product_name
      f.input :product_description
      f.input :price
      f.input :images, as: :file, input_html: { multiple: true }
      f.actions
    end
  end

  show do
    attributes_table do
      row :product_name
      row :category_id do |c|
        Category.select('category_name').find_by_id(c)
      end
      row :product_description
      row :price

      row :images do
        div do
          product.images.each do |img|
            div do
              image_tag url_for(img), size: "100x100"
            end
          end
        end
      end
    end
  end
end

ActiveAdmin.register Category do
  permit_params :category_name, :category_decription
end