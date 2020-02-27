class CreateGloups < ActiveRecord::Migration[5.0]
  def change
    create_table :gloups do |t|

      t.timestamps
    end
  end
end
