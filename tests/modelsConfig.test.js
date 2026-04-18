const { CLAUDE_MODELS } = require('../config/models')

describe('models config', () => {
  it('contains Claude Sonnet 4.6 in Claude model options', () => {
    expect(CLAUDE_MODELS).toContainEqual({
      value: 'claude-sonnet-4-6',
      label: 'Claude Sonnet 4.6'
    })
  })
})
