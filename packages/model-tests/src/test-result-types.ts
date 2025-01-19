import type { ModelType } from './capability-types';

export interface CapabilityResult {
  supported: boolean;
  error?: string;
}

export interface TestResult {
  provider: string;
  modelType: ModelType;
  modelId: string;
  variant?: string;
  timestamp: string;
  capabilities: {
    [key: string]: CapabilityResult;
  };
}
