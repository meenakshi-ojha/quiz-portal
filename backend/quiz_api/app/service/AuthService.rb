require "faraday"
require "circuitbox/faraday_middleware"
class AuthService
    def fetchUser(token)
        response = conn.get("/showuser") do |req|
            req.headers['Authorization'] = "Bearer "+token
        end
        response_body = (response.body)
        puts response_body
        return response_body
    end
    def conn
        return Faraday.new(
            url: 'http://localhost:3000',
            headers: {'Content-Type' => 'application/json', 'Accept' => 'application/json'}
        )do |c|
            c.use Circuitbox::FaradayMiddleware, identifier: 'user_auth_circuit', circuit_breaker_options: {sleep_window: 60, time_window: 60, volume_threshold: 10, error_threshold: 50}
            c.use Faraday::Response::RaiseError
        end
    end
end
