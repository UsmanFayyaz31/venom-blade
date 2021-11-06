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
  permit_params :product_name, :product_description, :full_length, :blade_length, :handle_length, :material, :sheath, :price, :category_id, images: []

  form do |f|
    f.inputs do
      f.input :category_id, as: :select, collection: Category.select(:category_name, :id).uniq
      f.input :product_name, required: true
      f.input :full_length
      f.input :blade_length
      f.input :handle_length
      f.input :material
      f.input :sheath
      f.input :product_description
      f.input :price, required: true
      f.input :images, as: :file, input_html: { multiple: true }, required: true
      f.actions
    end
  end

  show do
    attributes_table do
      row :product_name
      row :category_id do |c|
        Category.select('category_name').find_by_id(c)
      end
      row :full_length
      row :blade_length
      row :handle_length
      row :material
      row :sheath
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

ActiveAdmin.register User do
  permit_params :email, :reset_password_token
end

ActiveAdmin.register Order do
  permit_params :product_id, :user_id, :ordered_date

  form do |f|
    f.inputs do
      f.input :product_id, as: :select, collection: Product.select(:product_name, :id).uniq
      f.input :user_id, as: :select, collection: User.select(:email, :id).uniq
      f.input :ordered_date
      # f.input :product_name, required: true
      # f.input :full_length
      # f.input :blade_length
      # f.input :handle_length
      # f.input :material
      # f.input :sheath
      # f.input :product_description
      # f.input :price, required: true
      # f.input :images, as: :file, input_html: { multiple: true }, required: true
      f.actions
    end
  end
end