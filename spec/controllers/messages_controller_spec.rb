require 'rails_helper.rb'

describe MessagesController do
  describe "GET /api/v1/messages.json" do

    let( :json ){ JSON.parse( response.body ) }


    before do
      get 'index', format: :json
    end

    it 'should respond with a success' do
      expect( response.status ).to eq( 200 )
    end

    it 'returns a valid JSON object' do
      expect( json ).to be_a Array
    end

    it 'returns an object with the post ID' do
      expect( json.first["id"] ).to be 1
    end

    it 'returns an object with the posts body' do
      expect( json.first["message"] ).to eq 'Hello Angular World!'
    end

    it 'returns the right keys' do
      expect( json.first.keys ).to eq( ["id", "message"] )
    end
  end
end
