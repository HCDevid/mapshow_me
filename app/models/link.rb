class Link < ActiveRecord::Base
  require 'uri'
  validates :in_url, :out_url, :http_status, :presence => true
  validates :in_url, :uniqueness => true

  before_validation :generate_in_url, :clean_out_url

  private

    def generate_in_url
      self.in_url = SecureRandom.hex(5)
    end

  def clean_out_url
    uri = URI(self.out_url)
    if uri.scheme.nil?
      self.out_url = "http://#{self.out_url}"
    else
      return self.out_url
    end
  
	end



end
