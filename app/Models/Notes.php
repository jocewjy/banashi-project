<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    use HasFactory;

    protected $table = 'users';

    protected $fillable = [
        'notes1',
        'notes2',
        'notes3',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
