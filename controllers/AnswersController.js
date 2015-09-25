questionsAnswers.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    $scope.question.answers.push({ name: $scope.answerName, id: $scope.question.answers.length + 1, votes: 0 });
    $scope.answerName = null;
};
    $scope.upVote = function($scope) {

    $scope.votes += 1;
  };

  $scope.downVote = function($scope) {

  $scope.votes -= 1;
};
});

