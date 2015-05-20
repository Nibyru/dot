class SiteController < ApplicationController

  layout 'landing', only: :web

  layout 'without_menu', except: [:index, :web]

  before_filter :check_mobile_device
  
  def index
    @contact = Contact.new()
  end

  def web;end
  def webmobile;end
  def job_asad;end
  def job_bienal;end
  def job_comotti;end
  def job_jpd;end
  def job_martina;end
  def job_micapinna;end
  def job_micocina;end
  def job_natuveliz;end
  def job_pakua;end
  def job_tucmusica;end

  def new_contact
    @contact = Contact.new(contact_params)
    respond_to do |format|
      if @contact.save
        ContactMailer.new_contact(@contact).deliver
        format.json { render :json => {:message => "Gracias por su mensaje, nos comunicaremos a la brevedad"} and return }
      else
        format.json { render :json => {:message => @contact.errors.full_messages.join(', ').to_s} and return }
      end
    end
  end

private

  def check_mobile_device
    true if is_mobile_device?
  end

  def contact_params
    params.require(:contact).permit(:nombre, :email, :tel, :address, :body)
  end
end