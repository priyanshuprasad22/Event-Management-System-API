function extractValidationErrorMessage(error) {
    const errors = error.errors;
    const errorMessage = {};

    for (let field in errors) {
        errorMessage[field] = errors[field].message;
    }

    return errorMessage;
}

module.exports = extractValidationErrorMessage;