import type { AgentConfig, IsolationMode, JoinMode, ThinkingLevel } from "./types.js";

export function resolveAgentInvocationConfig(
  agentConfig: AgentConfig | undefined,
): {
  modelInput?: string;
  thinking?: ThinkingLevel;
  maxTurns?: number;
  inheritContext: boolean;
  runInBackground: boolean;
  isolated: boolean;
  isolation?: IsolationMode;
} {
  return {
    modelInput: agentConfig?.model,
    thinking: agentConfig?.thinking,
    maxTurns: agentConfig?.maxTurns,
    inheritContext: agentConfig?.inheritContext ?? false,
    runInBackground: agentConfig?.runInBackground ?? false,
    isolated: agentConfig?.isolated ?? false,
    isolation: agentConfig?.isolation,
  };
}

export function resolveJoinMode(defaultJoinMode: JoinMode, runInBackground: boolean): JoinMode | undefined {
  return runInBackground ? defaultJoinMode : undefined;
}
