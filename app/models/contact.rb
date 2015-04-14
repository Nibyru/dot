class Contact < ActiveRecord::Base
	validates :nombre, :email, :body, presence: true
end
