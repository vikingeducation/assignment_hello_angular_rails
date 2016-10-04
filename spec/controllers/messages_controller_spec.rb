require 'rails_helper.rb'

describe "GET /api/v1/messages.json", type: :controller do

  let( :json ){ JSON.parse( response.body ) }

  before do
    get '/api/v1/messages', format: :json
  end

  it 'should respond with a success' do
    expect( response.status ).to eq( 200 )
  end

  it 'returns a valid JSON object' do
    expect( json ).to be_a Hash
  end

  it 'returns an object with the post ID' do
    expect( json.first.id ).to be 1
  end

  it 'returns an object with the posts body' do
    expect( json.first.body ).to eq 'Hello Angular World!'
  end

  it 'returns the right keys' do
    expect( json.body.keys ).to eq( [:id, :message] )
  end
end
