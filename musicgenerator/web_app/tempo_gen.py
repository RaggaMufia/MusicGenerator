def tempo(timestamps, config_index):
    """Pull timestamps input from mobile device, output tempo value for music generator web app"""
    timestamps = [float(x) for x in timestamps]
    average_bpm = (len(timestamps)/(max(timestamps) - min(timestamps)))*60
    return average_bpm
