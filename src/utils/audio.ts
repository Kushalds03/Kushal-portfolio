/**
 * Cinematic Web Audio API Sound Synthesizer
 * Provides pure synthesized futuristic soundscapes without external MP3 files.
 */

class SoundEngine {
  private ctx: AudioContext | null = null
  private isMuted: boolean = false
  private ambientOsc: OscillatorNode | null = null
  private ambientGain: GainNode | null = null

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted
    if (this.isMuted) {
      this.stopAmbient()
    }
    return this.isMuted
  }

  public getMuted(): boolean {
    return this.isMuted
  }

  /**
   * High-tech micro-click for interactive buttons
   */
  public playClick() {
    if (this.isMuted) return
    this.initContext()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(880, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.05)

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.05)
    } catch {
      // Audio playback failsafe
    }
  }

  /**
   * Futuristic holographic hover sound
   */
  public playHover() {
    if (this.isMuted) return
    this.initContext()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(320, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(480, this.ctx.currentTime + 0.08)

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.08)
    } catch {
      // Silent catch
    }
  }

  /**
   * Success / Transmission sound for form send and resume download
   */
  public playSuccess() {
    if (this.isMuted) return
    this.initContext()
    if (!this.ctx) return

    try {
      const now = this.ctx.currentTime
      const chord = [440, 554.37, 659.25, 880] // A Major arpeggio
      chord.forEach((freq, idx) => {
        if (!this.ctx) return
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now + idx * 0.06)

        gain.gain.setValueAtTime(0, now + idx * 0.06)
        gain.gain.linearRampToValueAtTime(0.06, now + idx * 0.06 + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.35)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(now + idx * 0.06)
        osc.stop(now + idx * 0.06 + 0.35)
      })
    } catch {
      // Silent catch
    }
  }

  /**
   * Sub-bass cinematic atmospheric drone toggle
   */
  public startAmbient() {
    if (this.isMuted || this.ambientOsc) return
    this.initContext()
    if (!this.ctx) return

    try {
      this.ambientOsc = this.ctx.createOscillator()
      this.ambientGain = this.ctx.createGain()

      this.ambientOsc.type = 'sine'
      this.ambientOsc.frequency.setValueAtTime(55, this.ctx.currentTime) // Low A

      this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime)
      this.ambientGain.gain.linearRampToValueAtTime(0.02, this.ctx.currentTime + 2)

      this.ambientOsc.connect(this.ambientGain)
      this.ambientGain.connect(this.ctx.destination)

      this.ambientOsc.start()
    } catch {
      // Audio permission
    }
  }

  public stopAmbient() {
    if (this.ambientOsc && this.ambientGain && this.ctx) {
      try {
        this.ambientGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5)
        setTimeout(() => {
          this.ambientOsc?.stop()
          this.ambientOsc?.disconnect()
          this.ambientOsc = null
        }, 500)
      } catch {
        this.ambientOsc = null
      }
    }
  }
}

export const soundEngine = new SoundEngine()
