class AddIndexToLinksInUrl < ActiveRecord::Migration
  def change
    add_index :links, :in_url
  end
end
