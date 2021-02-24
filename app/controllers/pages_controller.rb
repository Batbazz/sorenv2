class PagesController < ApplicationController
  def contact
  end

  def home
    @contact = Contact.new
  end
end
