function [J, grad] = costFunction(theta, X, y)
%COSTFUNCTION Compute cost and gradient for logistic regression
%   J = COSTFUNCTION(theta, X, y) computes the cost of using theta as the
%   parameter for logistic regression and the gradient of the cost
%   w.r.t. to the parameters.

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly
J = 0;
grad = zeros(size(theta));
m=length(y);
theta_size=size(theta);
% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost of a particular choice of theta.
%               You should set J to the cost.
%               Compute the partial derivatives and set grad to the partial
%               derivatives of the cost w.r.t. each parameter in theta

predictions=X*theta;
sigmoid_value= -y.*log(sigmoid(predictions))-(1-y).*log(1-sigmoid(predictions));
J=1/m*sum(sigmoid_value);
%
% Note: grad should have the same dimensions as theta
%

for i=1:theta_size,
grad(i)=1/m*sum((sigmoid(predictions)-y).*X(:,i));
end






% =============================================================

end
