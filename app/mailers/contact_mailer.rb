class ContactMailer < ActionMailer::Base
	def new_contact(contact)
	    @contact = contact
	    puts ">>>>>>> send email ..."
	    mail(to: "dotestudiografico@gmail.com", subject: 'New Contact')
	end
end