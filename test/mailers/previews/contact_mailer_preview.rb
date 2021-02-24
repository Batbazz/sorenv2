# Preview all emails at http://localhost:3000/rails/mailers/contact_mailer
class ContactMailerPreview < ActionMailer::Preview
  def new_contact_email
    # Set up a temporary contact for the preview
    contact = Contact.new(first_name: "Joe", email: "joe@gmail.com", message: "I want to place an contact!")

    ContactMailer.with(contact: contact).new_contact_email
  end

end
