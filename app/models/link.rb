class Link < ActiveRecord::Base
  validates :in_url, :out_url, :http_status, :presence => true
  validates :in_url, :uniqueness => true

  before_validation :generate_in_url

  private

    def generate_in_url
      self.in_url = SecureRandom.hex(5)
    end
end
