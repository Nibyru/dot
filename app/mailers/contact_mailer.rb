class ContactMailer < ActionMailer::Base
	def new_contact(user)
	    @user = user
	    mail(to: "dotestudiografico@gmail.com", subject: 'New Contact')
	end
end