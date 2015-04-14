class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :nombre
      t.string :email
      t.integer :tel
      t.string :address
      t.text :body

      t.timestamps
    end
  end
end
